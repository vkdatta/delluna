export const name="chats-circle-thin";
export const id="dl_18db3886df414d23ab79";
export const url=new URL("../icons/chats-circle-thin.svg?v=adec6e15cfea0e40625a8864a33eec80a3b1e9874b16f5a274d3f35ab1d4d0ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
