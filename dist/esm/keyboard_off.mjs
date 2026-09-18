export const name="keyboard_off";
export const id="dl_4429f75085bd4e148b09";
export const url=new URL("../icons/K/keyboard_off.svg?v=54bb92fca0953da0e8cb676dfbaafa9e8aec7b8642fb125efa2a3ce11d5fead9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
