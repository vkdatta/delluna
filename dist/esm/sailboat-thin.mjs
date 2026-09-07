export const name="sailboat-thin";
export const id="dl_70e17e1a4d0d4a57a60e";
export const url=new URL("../icons/S/sailboat-thin.svg?v=cac7016e33935790045c366317f25873666ce61b11c44996866b1056191d12ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
