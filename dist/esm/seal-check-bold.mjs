export const name="seal-check-bold";
export const id="dl_63691e2304169f7049b5";
export const url=new URL("../icons/seal-check-bold.svg?v=663e2dafe350bfae018486d7eab8cada1967dd06c5496a616a72f582c08a26d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
