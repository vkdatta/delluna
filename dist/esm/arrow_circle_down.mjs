export const name="arrow_circle_down";
export const id="dl_b1bc5fa5f57f1dc79cc1";
export const url=new URL("../icons/arrow_circle_down.svg?v=a03d7b8c416c60032a13be2bc6800b1eef59d981631afff5e3134b4d79598c5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
