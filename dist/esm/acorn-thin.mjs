export const name="acorn-thin";
export const id="dl_6f253504958c4bb8ba23";
export const url=new URL("../icons/acorn-thin.svg?v=946c0aa8ad4cbac5ab6d8013535213b15fa8629f1e2b39857c785397c2e4ad00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
