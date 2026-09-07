export const name="broom-thin";
export const id="dl_4a5ef5f7be3144f9992b";
export const url=new URL("../icons/broom-thin.svg?v=d424200644551168c9d5b61b3b0fa23ff12a45ae014b17ca4c344978fe0fc934",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
