export const name="arrow-fat-line-up";
export const id="dl_ed7400738cf941fd8b15";
export const url=new URL("../icons/arrow-fat-line-up.svg?v=71ea2c64fa02cc5d5f62c12a341cbb4f9cfc17fb81fc674520abe5572d26245b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
