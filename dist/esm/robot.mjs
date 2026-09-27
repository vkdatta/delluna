export const name="robot";
export const id="dl_0bbca5a74eb74bea8276";
export const url=new URL("../icons/robot.svg?v=9127086d30abfd3219ba5795b5b7a9c3b46c20dcf80fb0788f45ad9aba7916b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
