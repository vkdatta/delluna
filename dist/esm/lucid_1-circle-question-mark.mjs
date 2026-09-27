export const name="lucid_1-circle-question-mark";
export const id="dl_3bfb07f7b4cd42818784";
export const url=new URL("../icons/lucid_1-circle-question-mark.svg?v=d2ed4842a16ed8e43b4a71bbda2f5aa581547355ca3599ffba6cf224287e34cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
