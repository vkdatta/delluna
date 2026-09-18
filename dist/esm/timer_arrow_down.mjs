export const name="timer_arrow_down";
export const id="dl_b834d02bc6254eb795ca";
export const url=new URL("../icons/T/timer_arrow_down.svg?v=46fc0449c0b0bca3ebcd7d29477dcb6ee2831ea4753fcf7745d5fdbd933eecfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
