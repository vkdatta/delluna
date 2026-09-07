export const name="egg-crack-thin";
export const id="dl_4f0ce2f93ccc4062b7cc";
export const url=new URL("../icons/egg-crack-thin.svg?v=b559fce4ffde0882d68dd3388c3391d21fc75700ec8359d4382cf3730999f1e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
