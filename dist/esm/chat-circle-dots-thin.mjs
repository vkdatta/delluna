export const name="chat-circle-dots-thin";
export const id="dl_eb69cfe51a2146cf9990";
export const url=new URL("../icons/chat-circle-dots-thin.svg?v=d7445fdf94e70f25d1a8bc8cbb3674de14ab8ff9cbd53dbae5a4441e6e591646",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
