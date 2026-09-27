export const name="lucid_3-microscope";
export const id="dl_da3630069d3643cf9b07";
export const url=new URL("../icons/lucid_3-microscope.svg?v=3f60168ec6b1f5d25bff1dc7ed7c98fa05281865c80b64e624dcde9d45cd7ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
