export const name="dice-two";
export const id="dl_79b3e2f3977a4e52aacb";
export const url=new URL("../icons/dice-two.svg?v=498cbe3eed9d0bbcfba353f3567c4efce03364c74071a6bf5a305ccc76cc9d17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
