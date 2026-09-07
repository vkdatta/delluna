export const name="acorn-thin";
export const id="dl_6f253504958c4bb8ba23";
export const url=new URL("../icons/acorn-thin.svg?v=efcb5601ebf42d346c07f01673543adbdf54c3d2bce335055ddaf41f9fa9305b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
