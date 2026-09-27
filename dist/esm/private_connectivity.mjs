export const name="private_connectivity";
export const id="dl_b24e2ca2dd128bbcf124";
export const url=new URL("../icons/private_connectivity.svg?v=35ccc58753272f339bf1cf5cb1edf3dad44691d3a002966bb89fd412e2de4fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
