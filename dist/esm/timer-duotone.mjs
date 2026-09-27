export const name="timer-duotone";
export const id="dl_400c91c7eefcb7d5029a";
export const url=new URL("../icons/timer-duotone.svg?v=5f2897d94ec59f0cffe32ed0856746073539a3d6ba0da1be48d8e3fbdc1f93af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
