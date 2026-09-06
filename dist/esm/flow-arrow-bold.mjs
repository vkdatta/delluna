export const name="flow-arrow-bold";
export const id="dl_47242db022e94b49ba47";
export const url=new URL("../icons/flow-arrow-bold.svg?v=098d5c4f07162a34c10e5c8a4dca83402e6f48875a3865c065ecf5ff94016c62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
