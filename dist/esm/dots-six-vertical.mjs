export const name="dots-six-vertical";
export const id="dl_d6fda55d101d4ad68e12";
export const url=new URL("../icons/dots-six-vertical.svg?v=74cb7f10a378fe9ce95eef5c5822171d6947122d09a14e1daf044d5cddaf9495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
