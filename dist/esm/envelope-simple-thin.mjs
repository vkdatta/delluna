export const name="envelope-simple-thin";
export const id="dl_791ecfa437e548abb698";
export const url=new URL("../icons/envelope-simple-thin.svg?v=4598a1740bd34f02d1ee3ddac1117f31806af53856f3bfb7d982a395e8490799",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
