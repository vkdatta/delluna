export const name="beach-ball-thin";
export const id="dl_e475d3a7f0f34cf2873d";
export const url=new URL("../icons/beach-ball-thin.svg?v=004f7e94b905d402ba27741654ab441555f62c07a43570e234d5b8a617825187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
