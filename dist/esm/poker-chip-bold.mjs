export const name="poker-chip-bold";
export const id="dl_d7fb710acd0d4c79b5ff";
export const url=new URL("../icons/poker-chip-bold.svg?v=36c91a17bf02f900443634e8ba27aa4f78e6f630f48b905e9cbc2a25f06f837b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
