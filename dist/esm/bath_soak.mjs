export const name="bath_soak";
export const id="dl_27e13a0872d92051cab7";
export const url=new URL("../icons/bath_soak.svg?v=398c55efc44afe9164488958e3cac5d5c876b0a537b093a29e341498587c9d25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
