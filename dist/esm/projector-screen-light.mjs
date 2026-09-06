export const name="projector-screen-light";
export const id="dl_9a413a38645349a689f1";
export const url=new URL("../icons/projector-screen-light.svg?v=be4f52b60b28058ae327417836df3c392b69e2e9dca5cd82bfe5aebdcc0544cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
