export const name="hand_gesture";
export const id="dl_0ecabcbdf0b8eddd6964";
export const url=new URL("../icons/hand_gesture.svg?v=b370fbf39cb768cb0330e6a1606096220de6304ad21f594a0781f5e46d57c7cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
