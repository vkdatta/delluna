export const name="paint-brush-thin";
export const id="dl_7dba1396e07c4fa78010";
export const url=new URL("../icons/paint-brush-thin.svg?v=8f187fe6cf63ed01470345490559792ba272c943f99186a46483259ff5eef5e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
