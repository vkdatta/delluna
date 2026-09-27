export const name="garage";
export const id="dl_d4e4dbb509384d26a709";
export const url=new URL("../icons/garage.svg?v=2a23fe5822e2a0357f03b5f6acf57fb180f32a49d962bf57315d790492c214e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
