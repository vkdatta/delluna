export const name="lucid_2-mail-question-mark";
export const id="dl_d1292fb549c4463c91e3";
export const url=new URL("../icons/lucid_2-mail-question-mark.svg?v=0c119839bbf31deae788f158d374f224ee342c3e9d41d1950322fc5aaa2aa8f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
