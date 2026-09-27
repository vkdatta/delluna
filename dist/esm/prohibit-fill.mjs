export const name="prohibit-fill";
export const id="dl_7bb95cf84444489ba332";
export const url=new URL("../icons/prohibit-fill.svg?v=fdf512af67505b8140f44f80802cc232aa56fd2acfc2b36e9010c4d501093fd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
