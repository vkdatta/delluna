export const name="lucid_1-audio-lines";
export const id="dl_74d9bb4dcfbe4ee8b347";
export const url=new URL("../icons/lucid_1-audio-lines.svg?v=6f5e97b49106f2029deb316dd716ee70c688020304d8ea949ddb4329c2b08667",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
