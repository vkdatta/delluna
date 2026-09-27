export const name="notepad-thin";
export const id="dl_d316b53a3cee42b9a552";
export const url=new URL("../icons/notepad-thin.svg?v=0aa81b42640c5a93abd4e6349525be017e149b896f4f4157b59731f9f74ab895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
