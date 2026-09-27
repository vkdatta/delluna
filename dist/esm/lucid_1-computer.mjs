export const name="lucid_1-computer";
export const id="dl_76e82f85969a4e44b390";
export const url=new URL("../icons/lucid_1-computer.svg?v=e27f48c9f2f151a343cef3e6d2b255ce468323a5f0146930dc4348d7f2e554b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
