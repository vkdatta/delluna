export const name="voicemail_2";
export const id="dl_695812c8ccd010387595";
export const url=new URL("../icons/voicemail_2.svg?v=acf32a571de5f639c7d341f1f4d3ab4f261c59154618fbc49038383475137374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
