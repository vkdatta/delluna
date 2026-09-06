export const name="codesandbox-logo-bold";
export const id="dl_b1a8fec30c0646b69f3b";
export const url=new URL("../icons/codesandbox-logo-bold.svg?v=264439b7dfa93c7852ad849a7ce95ed461a58e3853179e2dbcfa425add6532a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
