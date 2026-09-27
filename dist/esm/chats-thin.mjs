export const name="chats-thin";
export const id="dl_4dfad51befa54ff8aae1";
export const url=new URL("../icons/chats-thin.svg?v=61f85248ccedc790978951b5eba86c4286f3477651a09a53c1e7fdf22b16ad7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
