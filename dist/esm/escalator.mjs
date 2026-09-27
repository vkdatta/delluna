export const name="escalator";
export const id="dl_c48b222606343a28963d";
export const url=new URL("../icons/escalator.svg?v=e6e9df46b16f79217d2bb210e31aa85f17c5ac23360c3f21507da85712ac083e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
