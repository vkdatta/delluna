export const name="asterisk-simple-thin";
export const id="dl_0207bab6f5fe4de7b8d6";
export const url=new URL("../icons/asterisk-simple-thin.svg?v=ca2b71d644ca7aa20fdd4ff42a000db77db9d2abe4256aea2044183daf27dc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
