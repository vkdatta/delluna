export const name="pacemaker";
export const id="dl_69eb1bd030d14b6193f1";
export const url=new URL("../icons/P/pacemaker.svg?v=ed727d2bc12730da0e963562a32f8517ae3fd0377863ebb892a5c380dd8c93f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
