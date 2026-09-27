export const name="ghost";
export const id="dl_dac37bbc146a4f94ada3";
export const url=new URL("../icons/ghost.svg?v=2ad2c7590cb67d234ebb9e597ebafb1ccc241db59dfe99772cb85f2f6d932bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
