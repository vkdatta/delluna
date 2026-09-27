export const name="vector-three-thin";
export const id="dl_5e0384c3926322950fca";
export const url=new URL("../icons/vector-three-thin.svg?v=3569bd1f4cbcfd27024d01ac41e5b2a28b2f99c44b86e6bc327d73aba8ab8044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
