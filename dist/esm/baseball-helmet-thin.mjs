export const name="baseball-helmet-thin";
export const id="dl_6808f35414dc4732bd14";
export const url=new URL("../icons/baseball-helmet-thin.svg?v=8db545ccc9888c0af17f4af6590215670f0750883c89b0d38ce6417d042df3aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
