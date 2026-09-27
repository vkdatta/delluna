export const name="text-aa-light";
export const id="dl_740ed851313da417929f";
export const url=new URL("../icons/text-aa-light.svg?v=85f915f29341690382ab7e8af566974c11ff15aa29704d198e33fd2e311d3e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
