export const name="bowl-steam-light";
export const id="dl_fbfb86fbdccd4ecdaac8";
export const url=new URL("../icons/bowl-steam-light.svg?v=79979a261ad00399fa23f1ee01e8d62d551f0e4aa423d3725904688bee262a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
