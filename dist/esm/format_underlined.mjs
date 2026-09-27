export const name="format_underlined";
export const id="dl_ff55236163422def5eec";
export const url=new URL("../icons/format_underlined.svg?v=8c6652182bcb4442708bf6e7b70de9524775d453c7390960f8d9b8ec2ce2f7e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
