export const name="arrow-fat-left-thin";
export const id="dl_96de9cb464b04cf7832a";
export const url=new URL("../icons/arrow-fat-left-thin.svg?v=24b3c0c49f07a56b15ccaad13bb6f8312c504932dd721b8a0d41283fb2e348de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
