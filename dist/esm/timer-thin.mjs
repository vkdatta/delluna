export const name="timer-thin";
export const id="dl_50d53d63ce0a2b5bccb6";
export const url=new URL("../icons/timer-thin.svg?v=40ce3bc349626096ea929446208e94f1f6349aa0144247b7eaa3a1ae4feddea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
