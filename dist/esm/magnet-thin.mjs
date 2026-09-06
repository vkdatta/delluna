export const name="magnet-thin";
export const id="dl_0fcfd03f38184811820e";
export const url=new URL("../icons/magnet-thin.svg?v=8c962c347ee45b2414085a896840ec8c0f0878509af28ceac79bbff76feae92b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
