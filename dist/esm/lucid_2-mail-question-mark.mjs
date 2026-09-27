export const name="lucid_2-mail-question-mark";
export const id="dl_d1292fb549c4463c91e3";
export const url=new URL("../icons/lucid_2-mail-question-mark.svg?v=5bee1812d39f96c76ba0cc422435bd3d254505803b15a20d6d14f2e20a5ec131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
