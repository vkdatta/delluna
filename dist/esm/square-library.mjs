export const name="square-library";
export const id="dl_4c1ef0ec2f9a45e78ebe";
export const url=new URL("../icons/square-library.svg?v=ad68deb9448868521fe3ed79b87121edf2078444a49c5df775b2b63ff3cb17c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
