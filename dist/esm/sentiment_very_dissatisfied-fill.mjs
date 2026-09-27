export const name="sentiment_very_dissatisfied-fill";
export const id="dl_67d6277f53728dd5ef05";
export const url=new URL("../icons/sentiment_very_dissatisfied-fill.svg?v=8f574ebad1ec88f5b7775fc606da62804ec28b4de9dc99ad195c74455db5afe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
