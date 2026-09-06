export const name="lucid_1-circle-question-mark";
export const id="dl_3bfb07f7b4cd42818784";
export const url=new URL("../icons/lucid_1-circle-question-mark.svg?v=b9eabf53774dae16b80caf27fe42b85dee6eeab3dfb456dbeee4829e8550d392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
