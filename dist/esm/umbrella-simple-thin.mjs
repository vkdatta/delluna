export const name="umbrella-simple-thin";
export const id="dl_ced4661252512f2a7aa5";
export const url=new URL("../icons/umbrella-simple-thin.svg?v=08e4b55762eae8e73a6067dd635bfeb59fcdd375704c69f6df56a3642acdbc5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
