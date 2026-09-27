export const name="seal-warning";
export const id="dl_14a5b9d9edcddd1255f8";
export const url=new URL("../icons/seal-warning.svg?v=a53a61a248fe8e680778f6a234fe5e7c87e119a8ece6caf58601e1a75b509d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
