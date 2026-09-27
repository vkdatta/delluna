export const name="pencil-simple-slash-thin";
export const id="dl_dae753adaf5042f1a7f8";
export const url=new URL("../icons/pencil-simple-slash-thin.svg?v=7fbb2d68538ea4f6f2cb592bc77a9552401caec75f8a053479d5d5ff5c6047eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
