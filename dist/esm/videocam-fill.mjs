export const name="videocam-fill";
export const id="dl_fcb03df90909c8f45ae6";
export const url=new URL("../icons/videocam-fill.svg?v=f9cdae5ac9870a25db4b6b40f99b412fc17453c3dd916d7c209a433f82cbd618",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
