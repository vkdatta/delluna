export const name="lucid_3-playing-cards";
export const id="dl_5efcaf8fb53e4b49ac85";
export const url=new URL("../icons/lucid_3-playing-cards.svg?v=7713bc310cc62cf365563dfa5e29308cac119b05b74fb508a5b3f4fd6225d280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
