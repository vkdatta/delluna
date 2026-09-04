export const name="robot-thin";
export const id="dl_d72fc985551e4a72b25c";
export const url=new URL("../../icons/R/robot-thin.svg?v=f29eab3c40e6ee8811589d6b5a25ca3bb655bdae5d568b83c1efd37cf996599f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
